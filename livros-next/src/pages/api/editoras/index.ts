import { NextApiRequest, NextApiResponse } from 'next';
import  ControleEditora  from '../../../classes/controle/ControleEditora';

const controleEditora = new ControleEditora(); // Certifique-se de ter importado o ControleEditora corretamente

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const editoras = await controleEditora.getEditoras();
      res.status(200).json(editoras);
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Erro interno do servidor:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}