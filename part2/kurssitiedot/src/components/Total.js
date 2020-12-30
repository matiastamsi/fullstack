import React from 'react'

const Total = ({ parts }) => {
    const total = parts.reduce(function (sum, part) {
        return sum + part.exercises
    }, 0)

    return (
        <div>
            <ul>
                <br></br>
                <b>
                    Total of {total} exercises
                 </b>
            </ul>
        </div>
    )
}

export default Total