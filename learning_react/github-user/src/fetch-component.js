import { useState, useEffect } from "react";

export default function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSucess={UserDetails}
    />
  );
}

function UserDetails({ data }) {
  return (
    <div className="githubuser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        <p>
          {data.name} - {data.location}
        </p>
      </div>
    </div>
  );
}

function Fetch({
  uri,
  renderSucess,
  loadingFallback = <p>loading....</p>,
  renderError = (error) => <pre>{JSON.stringify(error)}</pre>,
}) {
  const { loading, data, err } = useFetch(uri);
  if (loading) return loadingFallback;
  if (err) return renderError(err);
  if (data) return renderSucess({ data });
}

//let uri = `https://api.github.com/users/${login}`

function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(`enter into efffect ${uri} ==== `);
    if (!uri) return;

    fetch(uri)
      .then((res) => res.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch((err) => setError(err));
  }, []);

  return { loading, data, error };
}
