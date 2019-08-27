const { User, Appointment } = require('../models')
const { Op } = require('sequelize')
const moment = require('moment')

class DashboardController {
  async index (req, res) {
    if (req.session && req.session.user.provider) {
      const appointments = await Appointment.findAll({
        where: {
          provider_id: req.session.user.id,
          date: {
            [Op.between]: [
              moment()
                .startOf('day')
                .format(),
              moment()
                .endOf('day')
                .format()
            ]
          }
        },
        order: [['date', 'ASC']]
      })

      return res.render('scheduled', { appointments })
    } else {
      const providers = await User.findAll({ where: { provider: true } })

      return res.render('dashboard', { providers })
    }
  }
}

module.exports = new DashboardController()
