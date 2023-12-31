import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

function SearchPage() {
  const { data } = useSelector((state: RootState) => state.data);
  const { searchValue } = useSelector((state: RootState) => state.searchValue);
  const { searchHistoryValue } = useSelector(
    (state: RootState) => state.searchHistoryValue
  );

  const filterValue = data.items.filter((item: VideoItem) => {
    return item.snippet.title.toUpperCase().includes(searchValue.toUpperCase());
  });

  // console.log(filterValue);

  return (
    <ul>
      {searchValue ? (
        <>
          {filterValue.map((item: VideoItem) => (
            <ListItem key={item.id}>{item.snippet.title}</ListItem>
          ))}
        </>
      ) : (
        <>
          {/* {searchHistoryValue ? (
            <>
              {searchHistoryValue.map((item: VideoItem) => (
                <ListItem key={item.id}>{item.snippet.title}</ListItem>
              ))}
            </>
          ) : ( */}
          <SearchHistory>검색 기록이 없습니다.</SearchHistory>
          {/*   )} */}
        </>
      )}
    </ul>
  );
}

export default SearchPage;

const ListItem = styled.li`
  min-height: var(--primary-margin);
  max-height: fit-content;
  overflow: hidden;
  padding: 1rem;
  border: 0.0625rem solid var(--button-hover-color);
  color: var(--darkmode-color);
`;

const SearchHistory = styled.p`
  margin-top: 1rem;
  text-align: center;
  color: var(--darkmode-color);
`;
