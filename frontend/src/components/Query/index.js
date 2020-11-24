import React from "react";
import { useQuery } from '@apollo/react-hooks';


const Query = ({ children, query, id }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { id: id }
  });

  if (loading) return <div class="lds-ring"><div></div><div></div><div></div><div></div></div>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;
