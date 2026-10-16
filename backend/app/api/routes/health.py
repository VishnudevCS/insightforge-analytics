from fastapi import APIRouter

router = APIRouter(
    prefix="/health",
    tags=["System"],
)


@router.get("")
async def health_check() -> dict[str, str]:
    return {
        "status": "healthy",
        "service": "backend",
        "version": "1.0.0",
    }