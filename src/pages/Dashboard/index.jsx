import { DeckList, Watchlist, News } from '../../components';

const Dashboard = () => {

  const newsItems = [
    // Array of news items
    { title: "News 1" , content: "Some stuff"},
    { title: "News 2" , content: "Some stuff" },
  ];
  return (
    <div>
      <h1>Dashboard</h1>
      <News newsItems={newsItems}/>
      <Watchlist />
      <DeckList />
    </div>
  );
};

export default Dashboard