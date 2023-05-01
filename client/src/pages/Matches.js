import { useQuery } from '@apollo/client';
import { GET_MATCH_FIELD } from '../utils/queries';

function Matches({ userId }) {
  const { loading, error, data } = useQuery(GET_MATCH_FIELD, {
    variables: { id: userId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.getMatchField.map((match) => (
        <div key={match.username}>
          <p>Username: {match.username}</p>
          <p>Name: {match.name}</p>
          <p>Gender: {match.gender}</p>
          <p>Pet: {match.pet}</p>
        </div>
      ))}
    </div>
  );
}
