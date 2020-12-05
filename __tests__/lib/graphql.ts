import axios from 'axios';
import _ from 'lodash';

interface RequestParams {
  url: string;
  accessToken: string;
  query: string;
  variables?: Record<string, any>;
}

interface AppSyncError {
  errorType: string;
  message: string;
}

function throwOnErrors({
  query,
  variables,
  errors,
  headers,
}: Pick<RequestParams, 'query' | 'variables'> & {
  errors: AppSyncError[];
  headers: Record<string, any>;
}) {
  if (errors.length > 0) {
    const errorMessage = `${JSON.stringify(
      errors,
      null,
      2,
    )} when executing query: ${query.substring(
      0,
      100,
    )} with variables: ${JSON.stringify(
      variables,
      null,
      2,
    )} and headers ${JSON.stringify(headers, null, 2)}`;

    throw new Error(errorMessage);
  }
}

const GraphQL = async ({
  url,
  accessToken,
  query,
  variables = {},
}: RequestParams) => {
  const headers: { Authorization?: string } = {};

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }

  try {
    const response = await axios({
      url,
      method: 'POST',
      headers,
      data: {
        query,
        variables: JSON.stringify(variables),
      },
    });

    // Response from AppSync is going to contain `data` and `errors`
    const { data, errors } = response.data;

    // Throw on AppSync errors
    throwOnErrors({ query, variables, errors, headers });

    return data;
  } catch (error) {
    const errors = _.get(error, 'response.data.errors');

    // Throw on regular HTTP errors
    throwOnErrors({ query, variables, errors, headers });
    throw error;
  }
};

export { GraphQL };
