/**
 * Created by fb3 on 3/23/17.
 */
import gql from 'graphql-tag';

export default gql`
mutation Signup($email: String, $password: String) {
  signup(email: $email, password: $password) {
    id
    email
  }
}	
`