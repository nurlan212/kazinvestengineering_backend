import {openaiClient} from '../openaiClient.js';

export default {
  get: async (req, res) => {
    try {
      return res.status(200).send('Response from server');
    } catch (error) {
      console.log('error: ', error);
      return res.status(500).send(error);
    }
  },
  requestToChatGPT: async (req, res) => {
    try {
      const body = req.body;
      const response = await openaiClient.responses.create({
        model: 'gpt-3.5-turbo',
        input: body.text,
      });

      const resp = response.output_text;        
      return res.status(200).send(resp);
    } catch (error) {
      console.log('error: ', error);
      return res.status(500).send(error);
    }
  }
};