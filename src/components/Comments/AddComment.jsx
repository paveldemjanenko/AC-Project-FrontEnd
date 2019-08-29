import React from "react";

const AddComment = props => {
  const { onSubmit, onChange } = props;
  return (
    <form onSubmit={onSubmit} className='col-6 mx-auto'>
      <div className='form-group'>
        <label htmlFor='' className='text-blue font-italic'>Leave comment</label>
        <textarea name='text' placeholder='Minimum text length 10 characters' onChange={onChange} className='form-control' />
      </div>
      <button type='submit' className='btn btn-success float-right mb-5'>
        Add Comment
      </button>
      
    </form>
  );
};

export default AddComment;
