/**
 * Created by fb3 on 3/22/17.
 */
import gql from 'graphql-tag';

export default gql`
mutation Login($email: String, $password: String) {
  login(email: $email, password: $password) {
    id
    email
  }
}
`;