import React from "react";

const Search = ({ search, onSearch }) => {
    return (
        <div>
            Search:
            <input value={search} onChange={onSearch} placeholder="仅支持搜索标题(title)" />
        </div>
    )
}

const App = () => {
    const [search, setSearch] = React.useState('')
    const stories = [
        {
            title: 'React',
            url: 'https://reactjs.org/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 4,
            objectID: 0,
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org/',
            author: 'Dan Abramov, Andrew Clark',
            num_comments: 2,
            points: 5,
            objectID: 1,
        },
    ];

    const handleChange = event => {
        setSearch(event.target.value)
    }

    const filterStories = stories.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))

    return (
        <div>
            <h1>My Hacker Stories</h1>
            <Search search={search} onSearch={handleChange} />
            <hr />
            <List list={filterStories} />
        </div>
    )
}
