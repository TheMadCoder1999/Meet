'use strict';

module.exports.hello = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Testing manual input",
                input: event,
            },
            null,
            2
        ),
    };
};