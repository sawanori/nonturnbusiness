// pages/api/example.js
import Cors from 'cors';

// CORSミドルウェアの初期化
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST'], // 許可するHTTPメソッド
  origin: 'http://localhost:3000', // 許可するオリジン
});


// pages/api/contact.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_HYPERFORM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 必要なヘッダーを設定
        },
        body: JSON.stringify(req.body),
      });

      if (!response.ok) {
        throw new Error('APIリクエスト失敗');
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
