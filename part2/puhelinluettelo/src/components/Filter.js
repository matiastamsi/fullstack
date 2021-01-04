import React from 'react'

const Filter = (props) => {
    return (
        <form>
            <div>
                filter shown with: <input value={props.newSearchWord} onChange={props.handleSearchChange} />
            </div>
        </form>
    )
}

export default Filter