import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

export const getTransactions = gql`
  query GetTransactions {
    transactions {
      id
      user {
        name
      }
      created
    }
  }
`;

type PropType = {
  loading: boolean;
  data: { transactions: Array<any> };
};

export const TransactionsScreen = () => (
  <Query query={getTransactions}>
    {({ loading, data }: PropType) => {
      return (
        !loading &&
        data && (
          <table>
            <thead>
              <tr>
                <th>Created</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              {data.transactions.map(transaction => (
                <tr key={transaction.id}>
                  <td>{transaction.created}</td>
                  <td>{transaction.user.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      );
    }}
  </Query>
);
