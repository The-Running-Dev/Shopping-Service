export enum ErrorType {
    InvalidZipCode = 0,
    InvalidCoordinates = 1,
    InvalidLatitude = 2,
    InvalidLongitude = 3,
    CouldNotGetWeather = 4,
    ZipApiUsageLimitExceeded = 5,
    Unknown = -1
}