import { describe, it, expect, beforeEach, vi } from 'vitest';
import httpClient from '../../src/http-client';
import VehicleClientService from '../../src/vehicles';

vi.mock('../../src/http-client', () => ({
    default: vi.fn(),
}));


describe('VehicleClientService', () => {
    const hash = 'test-hash';
    let service: ReturnType<typeof VehicleClientService>;

    beforeEach(() => {
        service = VehicleClientService(hash);
    });

    it('should fetch all vehicles', async () => {
        const mockResponse = {
            data: [],
            hasNextPage: false,
            numberGridLine: 0,
        };
        (httpClient as any).mockResolvedValue(mockResponse);

        const params = { _limit: 10, _offset: 0 };
        const response = await service.getAll(params);

        expect(httpClient).toHaveBeenCalledWith(`${hash}/vehicles`, { query: params });
        expect(response).toEqual(mockResponse);
    });

    it('should fetch vehicle positions', async () => {
        const mockResponse = {
            data: [],
            hasNextPage: false,
            numberGridLine: 0,
        };
        (httpClient as any).mockResolvedValue(mockResponse);

        const vehicleCode = 123;
        const params = { _accountCode: 1, _fromUTC: '2023-01-01T00:00:00Z', _toUTC: '2023-01-02T00:00:00Z', _limit: 10, _offset: 0 };
        const response = await service.getVehiclePositions(vehicleCode, params);

        expect(httpClient).toHaveBeenCalledWith(`${hash}/vehicles/${vehicleCode}/positions`, { query: params });
        expect(response).toEqual(mockResponse);
    });
});