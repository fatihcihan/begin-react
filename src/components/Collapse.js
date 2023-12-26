import React from 'react';

const Collapse = () => {
    return (
        <div>
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Link with href
            </a>
            <div class="collapse" id="collapseExample">
                The content that opens when you click on the link
            </div>
        </div>
    );
};

export default Collapse;

