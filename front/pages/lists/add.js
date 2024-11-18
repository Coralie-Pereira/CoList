//J'AI COMMENTER CETTE PARTIE POUR NE PAS AVOIR DE CONFFLIT DU FAIT QUE MONGODB NE FONCTIONNE PAS J'AI QUAND MEME PRIS SOIN DE LA REALISER DU MIEUX QUE JE POUVAIS MALGRES QUE JE NE PUISSE PAS TESTER

// import { useState } from "react";
// import Layout from "../../components/Layout";
// import { useRouter } from "next/router";

// export default function AddList() {
//   const [name, setName] = useState("");
//   const router = useRouter();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await fetch.post("http://localhost:3000/list/add", { name });
//     router.push("/");
//   };

//   return (
//     <Layout>
//       <h2>Ajouter une nouvelle liste</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Nom de la liste :</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <button type="submit">Ajouter</button>
//       </form>
//     </Layout>
//   );
// }
