const Mail = require('../services/Mail')

class PurchaseMail {
  get key () {
    return 'PurchaseMail'
  }

  async handle (job, done) {
    const { ad, user, content, offer } = job.data

    await Mail.sendMail({
      from: '"Vinícius Fraga" <vinifragam@gmail.com>',
      to: ad.author.email,
      subject: `Solicitação de compra: ${ad.title}`,
      template: 'purchase',
      context: { user, content, ad, offer }
    })

    return done()
  }
}

module.exports = new PurchaseMail()
