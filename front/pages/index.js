//J'AI COMMENTER CETTE PARTIE POUR NE PAS AVOIR DE CONFFLIT DU FAIT QUE MONGODB NE FONCTIONNE PAS J'AI QUAND MEME PRIS SOIN DE LA REALISER DU MIEUX QUE JE POUVAIS MALGRES QUE JE NE PUISSE PAS TESTER

// import Layout from "../components/Layout";
// import Link from "next/link";

import Layout from "../components/Layout";
import "../pages/_app.js";

// export default function Home({ list }) {
//   return (
//     <Layout>
//       <h2>Liste des listes</h2>
//       <Link href="/list/add">Ajouter une nouvelle liste</Link>
//       <ul>
//         {list.map((list) => (
//           <li key={list.id}>
//             {list.name}
//             <Link href={`/list/${list.id}`}> ✏️ Éditer</Link>
//           </li>
//         ))}
//       </ul>
//     </Layout>
//   );
// }

// export async function getServerSideProps() {
//   const res = await fetch.get("http://localhost:3000/list");
//   return {
//     props: {
//       list: res.data,
//     },
//   };
// }
export default function Home() {
  return (
    <div>
      <Layout></Layout>
    </div>
  );
}
