import { NextApiRequest, NextApiResponse } from 'next';
import  ControleLivro  from '../../../classes/controle/ControleLivros' // Certifique-se de ter importado o controleLivro corretamente

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'DELETE') {
      const codigoLivro = Number(req.query.codigo);
      await controleLivro.excluir(codigoLivro);
      res.status(200).json({ message: 'Livro excluído com sucesso' });
    } else {
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  } catch (error) {
    console.error('Erro interno do servidor:', error);
    res.status(500).json({ error: 'Erro interno do servidor' });
  }
}