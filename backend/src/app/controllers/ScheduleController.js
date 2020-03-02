import { startOfDay, parseISO, endOfDay } from 'date-fns';

import { Op } from 'sequelize';
import User from '../models/User';
import Appointment from '../models/Appointment';

class ScheduleController {
  async index(req, res) {
    const isCheckProvider = await User.findOne({
      where: {
        id: req.userId,
        provider: true,
      },
    });

    if (!isCheckProvider) {
      return res.status(400).json('User is not provider');
    }

    const { date, page = 1 } = req.query;

    const appointments = await Appointment.findAll({
      where: {
        provider_id: req.userId,
        canceled_at: null,
        date: {
          [Op.between]: [startOfDay(parseISO(date)), endOfDay(parseISO(date))],
        },
      },
      limit: 20,
      offset: (page - 1) * 20,
      order: ['date'],
    });
    return res.json(appointments);
  }
}

export default new ScheduleController();
