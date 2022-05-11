CREATE  TABLE animales(
    id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    nombre TEXT NOT NULL,
    edad INT ,
    tipo TEXT,
    color TEXT
);

