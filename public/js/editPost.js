const postid = document.querySelector('input[name="postid"]').value

const editButtonHandler = async (event) => {
    console.log(postid)
    event.preventDefault();

    const title = document.querySelector('#edit-title').value.trim();
    const body = document.querySelector('#edit-body').value.trim();
    


    const id = event.target.getAttribute('data-id');

    await fetch(`/api/posts/${postid}`, {
        method: 'PUT',
        body: JSON.stringify({
           title,
           body
        }),
        headers: {
            'Content-Type': 'application/js'
        }
    });

    // if (response.ok) {
    //     document.location.replace('/profile');
    // } else {
    //     alert('Failed to edit post');
    // }

};

// document.querySelector('.new-post-form');
// document.addEventListener('submit', newFormHandler);

document.querySelector('.edit-post').addEventListener('click', editButtonHandler);