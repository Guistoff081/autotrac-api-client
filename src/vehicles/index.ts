import $fetch from "../http-client";

interface Vehicle {
    vehicleAddress: string | number;
    vehicleCode: number;
    accountCode: number;
    accountNumber: number;
    availableDateTime: string;
    hashProject: string;
    licensePlate: string;
    mist: object | null;
}

interface VehiclePosition {
    latitude: number;
    longitude: number;
    positionTime: string;
    vehicleIgnition: number;
    landmark: string;
    transmissionChannel: number;
    hourmeter: number;
    hodometer: number;
    county: string;
    uf: string;
    countryDescription: string;
    speed: number | null;
}

interface FilteringParams {
    _limit?: number;
    _offset?: number;
    _clientCode?: number;
}

interface VehicleParams {
    _accountCode: number;
    _fromUTC: string;
    _toUTC: string;
}

interface VehiclesResponse {
    data: Vehicle[];
    hasNextPage: boolean;
    numberGridLine: number;
}

interface VehiclePositionsResponse {
    data: Vehicle[] & VehiclePosition[];
    hasNextPage: boolean;
    numberGridLine: number;

}


const VehicleClientService = (hash: string) => {
    return {
        getAll: async (params: FilteringParams) => {
            return $fetch<VehiclesResponse>(`${hash}/vehicles`, { query: params});
        },

        getVehiclePositions: async (vehicleCode: number, params:  VehicleParams & FilteringParams) => {
            return $fetch<VehiclePositionsResponse>(`${hash}/vehicles/${vehicleCode}/positions`, { query: params})
        }
    }
}

export default VehicleClientService;