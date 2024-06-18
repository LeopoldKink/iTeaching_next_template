-- CreateTable
CREATE TABLE "Messung" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "esp_id" TEXT NOT NULL,
    "temperatur" DOUBLE PRECISION NOT NULL,
    "luftfeuchtigkeit" DOUBLE PRECISION NOT NULL,
    "beschreibung" TEXT NOT NULL,
    "reale_temperatur" DOUBLE PRECISION NOT NULL,
    "reale_luftfeuchtigkeit" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Messung_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TestData" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,

    CONSTRAINT "TestData_pkey" PRIMARY KEY ("id")
);
