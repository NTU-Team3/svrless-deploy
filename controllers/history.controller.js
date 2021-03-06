const historyService = require("../services/history.service");

class HistoryController {
  // This is a class, which has methods 'listHistory'

  async listHistory(req, res) {
    const historyId = req.params.historyId;

    if (isNaN(Number(historyId))) {
      // res.status (xxx) is actually calling a function
      res.status(400);
      return res.send(`historyId need to be integers.`);
    }

    // Destructuring the below to status, data, message
    const { status, data, message } = await historyService.listHistory(historyId);

    res.status(status);

    res.json({ message, data });
  }
}

module.exports = HistoryController;
