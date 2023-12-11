import { useState, useEffect } from "react";
import ReactMarkdown from 'react-markdown';

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
      <UserRepositories
        login={data.login}
        onSelect={(repoName) => console.log(`${repoName} selected`)}
      />
    </div>
  );
}

function Fetch({
  uri,
  renderSucess,
  loadingFallback = <p>loading....</p>,
  renderError = (error) => <pre>{JSON.stringify(error)}</pre>,
}) {
  console.log(`runing ${uri}`);
  const { loading, data, err } = useFetch(uri);
  if (loading) return loadingFallback;
  if (err) return renderError(err);
  if (data) {
    console.log("end of fetching");
    return renderSucess({ data });
  }
}

//let uri = `https://api.github.com/users/${login}`

function useFetch(uri) {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const proxyUrl = "http://127.0.0.1:34891";
    // const targetUrl = 'https://api.example.com/data';

    const request = new Request(uri, {
      method: "GET",
      mode: "cors",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      // 指定代理URL
      // 注意：代理URL必须支持CORS（跨域资源共享）
      // 否则，您可能会遇到跨域请求被阻止的问题
      // 如果代理URL需要身份验证或其他配置，请相应地进行设置
      // 更多关于Request对象的配置选项，请参阅官方文档
      // https://developer.mozilla.org/en-US/docs/Web/API/Request/Request
      referrer: proxyUrl,
      referrerPolicy: "no-referrer-when-downgrade",
    });

    console.log(`enter into efffect ${uri} ==== `);
    if (!uri) return;

    fetch(uri)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .then(() => setLoading(false))
      .catch((err) => {
        console.log(err);
        setError(err);
      });
  }, [uri]);

  return { loading, data, error };
}

const useIterator = (items = [], initialIndex = 0) => {
  const [i, setIndex] = useState(initialIndex);

  const prev = () => {
    if (i == 0) return setIndex(items.length - 1);
    setIndex(i);
  };

  const next = () => {
    if (i == items.length) return setIndex(0);
    setIndex(i + 1);
  };

  return [items[i], prev, next];
};

function RepoMenu({ repoList, onSelect = (f) => f }) {
  const [{ name }, prev, next] = useIterator(repoList);

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name]);

  return (
    <div style={{ display: "flex" }}>
      <button onClick={prev}>&lt;</button>
      <p>{name}</p>
      <button onClick={next}>&gt;</button>
    </div>
  );
}

function UserRepositories({ login, selectRepo, onSelect = (f) => f }) {
  // console.log('login ---- '+login);
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSucess={({ data }) => {
        return (
          <RepoMenu
            repoList={data}
            selectRepo={selectRepo}
            onSelect={onSelect}
          />
        );
      }}
    />
  );
}


function RepoReadmeRender({login,repo}){

const [markdown ,setMarkdown] =useState("");
const [loading,setLoading] = useState(false)
const [error,setError] = useState();



async function loadReadMe(login, repo) {
  const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
  const { download_url } = await fetch(uri).then((res) => res.json());

  const markdown = await fetch(download_url).then((res) => res.text());

  console.log(`${markdown}`);
  setMarkdown(markdown);
}


}