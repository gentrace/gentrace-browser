/* tslint:disable */
/* eslint-disable */
/**
 * Gentrace Feedback API
 * These API routes are designed to ingest events from clients.
 *
 * The version of the OpenAPI document: 0.0.13
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setClientTokenToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { FeedbackRequest } from '../models';
// @ts-ignore
import { FeedbackResponse } from '../models';
/**
 * GentraceApi - axios parameter creator
 * @export
 */
export const GentraceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Submit feedback for a pipeline run
         * @param {FeedbackRequest} feedbackRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        feedbackPost: async (feedbackRequest: FeedbackRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'feedbackRequest' is not null or undefined
            assertParamExists('feedbackPost', 'feedbackRequest', feedbackRequest)
            const localVarPath = `/feedback`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(feedbackRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * GentraceApi - functional programming interface
 * @export
 */
export const GentraceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = GentraceApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Submit feedback for a pipeline run
         * @param {FeedbackRequest} feedbackRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async feedbackPost(feedbackRequest: FeedbackRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<FeedbackResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.feedbackPost(feedbackRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * GentraceApi - factory interface
 * @export
 */
export const GentraceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = GentraceApiFp(configuration)
    return {
        /**
         * 
         * @summary Submit feedback for a pipeline run
         * @param {FeedbackRequest} feedbackRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        feedbackPost(feedbackRequest: FeedbackRequest, options?: any): AxiosPromise<FeedbackResponse> {
            return localVarFp.feedbackPost(feedbackRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * GentraceApi - object-oriented interface
 * @export
 * @class GentraceApi
 * @extends {BaseAPI}
 */
export class GentraceApi extends BaseAPI {
    /**
     * 
     * @summary Submit feedback for a pipeline run
     * @param {FeedbackRequest} feedbackRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof GentraceApi
     */
    public feedbackPost(feedbackRequest: FeedbackRequest, options?: AxiosRequestConfig) {
        return GentraceApiFp(this.configuration).feedbackPost(feedbackRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
