export default {
  getAnswer: async (req, res) => {
    try {
      return res.status(200).send('Response from server');
    } catch (error) {
      console.log('error: ', error);
      return res.status(500).send(error);
    }
  }
};