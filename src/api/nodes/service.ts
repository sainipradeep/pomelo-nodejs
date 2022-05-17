
export default class NodesService {

    constructor() { }

    public parser(input: any) {
        try {
            const output = [];

            const selfNode: any = {};

            for (const nodes in input) {
                for (const node of input[nodes]) {
                    if (node['parent_id'] && selfNode.hasOwnProperty([node['parent_id']])) {
                        selfNode[node['parent_id']]['children'].push(node);
                    }
                    selfNode[node['id']] = node;
                }
            }

            for (const key in selfNode){
                if(selfNode[key]['parent_id'] === null){
                    output.push(selfNode[key])
                }
            }

            return output;

        } catch (error) {
            throw error;
        }
    }
}