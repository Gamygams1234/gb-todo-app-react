import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



const NoTodos = () => {

  return (
      <div className="no-todos">
        <FontAwesomeIcon className="icon" icon={faCircleInfo} />
          <h2 className="fw-700">No items found:</h2>
          <p className="fw-400">You haven't added any task. Add one</p>

      </div>

  )
}

export default NoTodos;
