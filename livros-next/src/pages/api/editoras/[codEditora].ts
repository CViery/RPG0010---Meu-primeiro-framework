import { NextApiRequest, NextApiResponse } from 'next';
import  controleEditora  from '../../../classes/controle/ControleEditora'; // Certifique-se de ter importado o controleEditora corretamente

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const codEditora = Number(req.query.codEditora);
    if (req.method === 'GET') {
      const nomeEditora = await controleEditora.getNomeEditora(codEditora);
      res.status(200).json({ nome: nomeEditora });
    } else {
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Erro interno do servidor:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}