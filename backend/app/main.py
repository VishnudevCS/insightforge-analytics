from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.router import api_router
from app.core.config import settings


def create_application() -> FastAPI:
    application = FastAPI(
        title=settings.app_name,
        description=settings.app_description,
        version=settings.app_version,
    )

    application.add_middleware(
        CORSMiddleware,
        allow_origins=[
            settings.frontend_url,
            "http://127.0.0.1:5173",
        ],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    application.include_router(
        api_router,
        prefix=settings.api_v1_prefix,
    )

    return application


app = create_application()


@app.get("/", tags=["Root"])
async def root() -> dict[str, str]:
    return {
        "application": settings.app_name,
        "status": "running",
        "documentation": "/docs",
    }