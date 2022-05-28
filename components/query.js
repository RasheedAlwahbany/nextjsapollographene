import { gql } from "@apollo/client";
// export const Query = gql`
//       query ExampleQuery {
//         users {
//           name
//           rocket
//           twitter
//         }
//       }
//     `;

// export const addQuery =({title,desc})=> gql`
//   mutation Mutation($title: title, $desc: desc) {
//     createBook( title: $title, desc: $desc) {
//       title
//       desc
//     }
//   }
// `;


// export const addQuery =()=> gql`
//   mutation Mutation($title:String!,$desc:String!){
//     createBook( input:{title: $title, desc: $desc}) {
//       title
//       desc
// 		}
// 	}
// `;


export const addQuery =gql`
  mutation Mutation($title:String!,$desc:String!){
    createBook( title: $title, desc: $desc) {
      title
      desc
		}
	}
`;

export const selectQuery =gql`
  {
    all_books {
      id
      title
      desc
    }
  }
`;
