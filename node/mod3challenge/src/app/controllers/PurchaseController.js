const Ad = require('../models/Ad')
const User = require('../models/User')
const Purchase = require('../models/Purchase')
const Queue = require('../services/Queue')
const PurchaseMail = require('../jobs/PurchaseMail')

class PurchaseController {
  async store (req, res) {
    const { ad, content } = req.body

    const purchasedAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    // verifica se ja foi comprado
    if (purchasedAd.purchasedBy) {
      return res.status(400).json({ error: 'Ad already sold' })
    }

    const offerData = {
      buyer: req.userId,
      ad,
      status: 'pending'
    }
    const offer = await Purchase.create(offerData)

    Queue.create(PurchaseMail.key, {
      ad: purchasedAd,
      user,
      content,
      offer: offer.id
    }).save()

    return res.send()
  }

  async index (req, res) {
    const offer = await Purchase.findById(req.params.id)
      .populate('buyer')
      .populate('ad')

    return res.json(offer)
  }

  async offer (req, res) {
    const { status } = req.body

    // verifica status
    if (status !== 'accepted' && status !== 'declined') {
      return res.status(400).json({ error: 'Invalid status' })
    }

    // verifica se oferta ja foi resolvida
    const offerId = await Purchase.findById(req.params.id)
    if (offerId.status !== 'pending') {
      return res.status(400).json({ error: 'Offer already resolved' })
    }
    const purchasedAd = await Ad.findById(offerId.ad)

    // verifica se ja foi comprado
    if (purchasedAd.purchasedBy) {
      return res.status(400).json({ error: 'Ad already sold' })
    }

    const offer = await Purchase.findByIdAndUpdate(
      req.params.id,
      {
        status
      },
      {
        new: true
      }
    )

    if (status === 'accepted') {
      const ad = await Ad.findByIdAndUpdate(
        offer.ad,
        { purchasedBy: offer.id },
        { new: true }
      )

      return res.json(ad)
    }

    return res.json(offer)
  }
}

module.exports = new PurchaseController()
