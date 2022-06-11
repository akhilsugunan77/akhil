import Main from "../components/Main";
import Row from "../components/Row";
import request from "../Request";
export default function Home() {
  return (
    <div>
      <Main />
      <Row rowID="1" title="Upcoming" fetchUrl={request.requestUpcomming} />
      <Row rowID="2" title="Popular" fetchUrl={request.requestPopular} />
      <Row rowID="3" title="Trending" fetchUrl={request.requestTrending} />
      <Row rowID="4" title="Top rated" fetchUrl={request.requestTopRated} />
      <Row rowID="5" title="Horror" fetchUrl={request.requestPopular} />
    </div>
  );
}
