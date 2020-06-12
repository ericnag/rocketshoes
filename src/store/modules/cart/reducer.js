import produce from 'immer';

export default function cart(state = [], action) {
    switch (action.type) {
        case '@cart/ADD_SUCCESS':
            return produce(state, (draft) => {
                // draft é uma "copia" do state que pode ser mutada, diferente do state q deve seguir o principio de imutabilidade
                const { product } = action;

                draft.push(product);
            });

        case '@cart/REMOVE':
            return produce(state, (draft) => {
                const productIndex = draft.findIndex((p) => p.id === action.id);

                if (productIndex >= 0) {
                    draft.splice(productIndex, 1);
                }
            });

        case '@cart/UPDATE_AMOUNT_SUCCESS': {
            return produce(state, (draft) => {
                const productIndex = draft.findIndex((p) => p.id === action.id);

                if (productIndex >= 0) {
                    draft[productIndex].amount = Number(action.amount);
                }
            });
        }

        default:
            return state;
    }
}
