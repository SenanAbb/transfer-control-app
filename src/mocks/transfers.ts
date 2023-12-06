const transfersMock = [
    {
        "id": 1,
        "driver": {
            "id": 1,
            "email": "usuario1@example.com",
            "rol": "Driver"
        },
        "price": 20.5,
        "date": "2023-12-06",
        "app": "uber",
        "payment_method": "card",
        "fee": 2.0,
        "toll": 1.5
    },
    {
        "id": 2,
        "driver": {
            "id": 2,
            "email": "usuario2@example.com",
            "rol": "Owner"
        },
        "price": 18.0,
        "date": "2023-12-07",
        "app": "bolt",
        "payment_method": "cash",
        "fee": 1.0,
        "toll": 0.0
    },
    {
        "id": 3,
        "driver": {
            "id": 1,
            "email": "usuario1@example.com",
            "rol": "Driver"
        },
        "price": 20.0,
        "date": "2023-12-07",
        "app": "bolt",
        "payment_method": "cash",
        "fee": 5.0,
        "toll": 1.0
    },
    {
        "id": 4,
        "driver": {
            "id": 2,
            "email": "usuario2@example.com",
            "rol": "Owner"
        },
        "price": 14.0,
        "date": "2023-12-07",
        "app": "bolt",
        "payment_method": "cash",
        "fee": 0.0,
        "toll": 4.0
    },
    {
        "id": 5,
        "driver": {
            "id": 2,
            "email": "usuario2@example.com",
            "rol": "Owner"
        },
        "price": 108.0,
        "date": "2023-12-07",
        "app": "bolt",
        "payment_method": "cash",
        "fee": 1.0,
        "toll": 0.0
    },
    // Agrega más objetos según sea necesario
]

export default transfersMock 
