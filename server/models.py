from dataclasses import dataclass


@dataclass
class User:
    id: int
    email: str
    is_active: bool = True


@dataclass
class Session:
    user_id: int
    token: str
