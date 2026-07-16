from server.models import User, Session


def create_session(user: User) -> Session:
    if not user.is_active:
        raise ValueError(f"user {user.id} is not active")
    return Session(user_id=user.id, token=f"tok-{user.id}")


def revoke_session(session: Session) -> None:
    session.token = ""
