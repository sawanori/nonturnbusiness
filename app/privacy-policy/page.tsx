import React, {FC} from 'react';
import PrivacyTop from '../components/privacytop';

const PrivacyPolicy:FC = () => {
  return (
    <>
     <PrivacyTop/>
     <section className="bg-white  pb-20 min-h-full">
      <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center  my-4 bg-gray-400  p-3 rounded">プライバシーポリシー</h1>
      <p className="mb-4">このプライバシーポリシーは、NonTurn合同会社（以下、「当社」といいます。）が提供する〇〇に適用されます。</p>
      
      <h2 className="text-xl font-semibold mt-6 bg-gray-200 p-2 rounded">1. 個人情報の収集と利用目的</h2>
      <p className="mt-4">当社は、サービス提供に必要な範囲で、お客様の個人情報を収集いたします。収集する個人情報の内容と利用目的は以下の通りです。</p>
      <ul className="list-disc ml-8 mb-4">
        <li>名前、連絡先情報 - サービス提供、お問い合わせ対応のため</li>
        <li>その他、当社が必要と判断した情報</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 bg-gray-200 p-2 rounded">2. 個人情報の第三者提供について</h2>
      <p className="mt-4">当社は、法令に基づく場合を除き、お客様の同意なしに個人情報を第三者に提供することはありません。</p>

      <h2 className="text-xl font-semibold mt-6 bg-gray-200 p-2 rounded">3. 個人情報の管理について</h2>
      <p className="mt-4">当社は、お客様の個人情報を適切に管理し、不正アクセス、紛失、破壊、改ざん、漏洩などのリスクから保護するための適切な措置を講じます。</p>

      <h2 className="text-xl font-semibold mt-6 bg-gray-200 p-2 rounded">4. プライバシーポリシーの変更</h2>
      <p className="mt-4">当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更後のプライバシーポリシーは、当社のウェブサイトに掲載されたものをもって効力を発します。</p>


    
      <h1 className="text-4xl font-bold text-center my-4 bg-gray-400 p-3 rounded">免責事項</h1>
      <p className="mb-4">この免責事項は、NonTurn合同会社（以下、「当サイト」といいます。）に適用されます。</p>

      <h2 className="text-xl font-semibold mt-6 bg-gray-200 p-2 rounded">1. コンテンツの利用</h2>
      <p className="mt-4">当サイトのコンテンツの利用は、ユーザーの責任で行われるものとします。当サイトは、コンテンツの正確性や安全性を保証しません。</p>

      <h2 className="text-xl font-semibold mt-6 bg-gray-200 p-2 rounded">2. 外部リンク</h2>
      <p className="mt-4">当サイトからリンクされる外部サイトの内容について、当サイトは責任を負いません。</p>

      <h2 className="text-xl font-semibold mt-6 bg-gray-200 p-2 rounded">3. 著作権</h2>
      <p className="mt-4">当サイトに掲載される内容の著作権は、当サイトまたは適切な権利者に帰属します。</p>

      <h2 className="text-xl font-semibold mt-6 bg-gray-200 p-2 rounded">4. 免責事項の変更</h2>
      <p className="mt-4">当サイトは、必要に応じて本免責事項を変更することがあります。変更後の免責事項は、当サイトに掲載されたものをもって効力を発します。</p>


      <h2 className="text-xl font-semibold mt-6 bg-gray-200 p-2 rounded">5. お問い合わせ</h2>
      <p className="mt-4">本プライバシーポリシー及び免責事項に関するお問い合わせは、以下までお願いいたします。</p>
      <p>Email:info@non-turn.com</p>
    </div>
     </section>
    </>
  );
};

export default PrivacyPolicy;
