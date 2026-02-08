import mongoose from "mongoose";
export interface ITodo {
    todoId: number;
    text: string;
}
declare const todoModel: mongoose.Model<ITodo, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, ITodo, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ITodo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<ITodo, mongoose.Model<ITodo, any, any, any, (mongoose.Document<unknown, any, ITodo, any, mongoose.DefaultSchemaOptions> & ITodo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
} & {
    id: string;
}) | (mongoose.Document<unknown, any, ITodo, any, mongoose.DefaultSchemaOptions> & ITodo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}), any, ITodo>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, ITodo, mongoose.Document<unknown, {}, ITodo, {
    id: string;
}, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ITodo & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    todoId?: mongoose.SchemaDefinitionProperty<number, ITodo, mongoose.Document<unknown, {}, ITodo, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ITodo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
    text?: mongoose.SchemaDefinitionProperty<string, ITodo, mongoose.Document<unknown, {}, ITodo, {
        id: string;
    }, mongoose.ResolveSchemaOptions<mongoose.DefaultSchemaOptions>> & Omit<ITodo & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}, ITodo>, ITodo>;
export default todoModel;
//# sourceMappingURL=todo.model.d.ts.map