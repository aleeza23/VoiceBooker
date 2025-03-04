from typing import Optional
from app.database.database import Session
from app.database.model import EBook


def create_ebook(
    title: str,
    author: str,
    summary: str,
    file_upload_id: int,
    user_id: int,
    session: Session,
) -> None:
    """
    Function to create an ebook.

    Args:
        title (str): The title of the ebook.
        author (str): The author of the ebook.
        summary (str): The summary of the ebook.
        file_upload_id (int): The ID of the file upload.
        user_id (int): The ID of the user.
        session (Session): The database session.

    Returns:
        None
    """
    ebook = EBook(
        title=title,
        author=author,
        summary=summary,
        file_upload_id=file_upload_id,
        user_id=user_id,
    )

    session.add(ebook)
    session.commit()
    session.refresh(ebook)
