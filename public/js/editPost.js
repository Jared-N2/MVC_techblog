const editButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/api/posts/${id}`, {
            method: 'PUT',

        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert('Failed to edit post');
        }
    }
};

// document.querySelector('.new-post-form');
// document.addEventListener('submit', newFormHandler);

document.querySelector('.edit-post');
document.addEventListener('click', editButtonHandler);