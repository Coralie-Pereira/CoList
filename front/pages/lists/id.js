// import { useState, useEffect } from "react";
// import Layout from "../../components/Layout";
// import { useRouter } from "next/router";

// export default function EditList() {
//   const router = useRouter();
//   const { id } = router.query;

//   const [name, setName] = useState("");

//   useEffect(() => {
//     if (id) {
//       fetch.get(`http://localhost:3000/list/${id}`).then((res) => {
//         setName(res.data.name);
//       });
//     }
//   }, [id]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await fetch.post(`http://localhost:3000/list/edit/${id}`, { name });
//     router.push("/");
//   };

//   return (
//     <Layout>
//       <h2>Éditer une liste</h2>
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="name">Nom de la liste :</label>
//         <input
//           type="text"
//           id="name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <button type="submit">Mettre à jour</button>
//       </form>
//     </Layout>
//   );
// }
