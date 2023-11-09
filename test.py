import pytest
from fastapi.testclient import TestClient

from api import app

client = TestClient(app)

def test_read_root():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"Hello": "World"}

def test_read_item():
    response = client.get("/items/42?query_param=test")
    assert response.status_code == 200
    assert response.json() == {"item_id": 42, "query_param": "test"}
