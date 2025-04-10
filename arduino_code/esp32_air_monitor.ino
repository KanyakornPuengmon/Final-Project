#include <WiFi.h>
#include <DHT.h>

#define DHTPIN1 27
#define DHTPIN2 14
#define DHTTYPE DHT11

DHT frontSensor(DHTPIN1, DHTTYPE);
DHT backSensor(DHTPIN2, DHTTYPE);

float voltage = 220.0;
float current = 0.5;
float power = 5862.0;
float btu = 12000;

void setup() {
  Serial.begin(115200);
  frontSensor.begin();
  backSensor.begin();
}

void loop() {
  float frontTemp = frontSensor.readTemperature();
  float backTemp = backSensor.readTemperature();

  Serial.println("Voltage: " + String(voltage));
  Serial.println("Current: " + String(current));
  Serial.println("Power: " + String(power));
  Serial.println("BTU: " + String(btu));
  Serial.println("Front Temp: " + String(frontTemp));
  Serial.println("Back Temp: " + String(backTemp));

  delay(2000);
}