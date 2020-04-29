import React, { useState } from "react";
import styles from "./Filter.module.sass";
import { Link } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import { Select } from "../inputs";

const Filter = (props) => {
  const { params } = props;
  const { marca, modelo, version } = params || {};
  const [marcaId, setMarcaId] = useState(marca);
  const [modeloId, setModeloId] = useState(modelo);
  const [versionId, setVersionId] = useState(version);
  const [showButton, setShowButton] = useState(false);

  const {
    response: marcas,
    loading: loadingMarcas,
    error: errorMarcas,
  } = useFetch(true, props.marca.url);
  const {
    response: modelos,
    loading: loadingModelos,
    error: errorModelos,
  } = useFetch(marcaId || marca, `${props.modelo.url}?MakeID=${marcaId}`);
  const {
    response: versions,
    loading: loadingeVersions,
    error: erroreVersions,
  } = useFetch(modeloId || modelo, `${props.version.url}?ModelID=${modeloId}`);

  const onChange = (e) => {
    switch (e.target.name) {
      case "marca":
        if (!e.target.value) {
          setMarcaId(-1);
          setModeloId(-1);
          setShowButton(false);
          setShowButton(false);
          return true;
        }
        setMarcaId(e.target.value);
        setModeloId(-1);
        setShowButton(false);
        break;
      case "modelo":
        if (!e.target.value) {
          setModeloId(-1);
          setShowButton(false);
          return true;
        }
        setModeloId(e.target.value);
        setShowButton(false);
        break;
      case "version":
        setVersionId(e.target.value);
        setShowButton(true);
        break;
      default:
        break;
    }
  };

  const hideLink = () => {
    setShowButton(false);
  };

  const reset = () => {
    setMarcaId(-1);
    setModeloId(-1);
    setVersionId(-1);
  };

  return (
    <>
      <div className={styles["row"]}>
        <div className={styles["col"]}>
          <div className={styles["row"]}>
            <Select
              value=""
              name="local"
              label="Local"
              onChange={() => {}}
              loading={false}
              data={[]}
            />
          </div>
          <div className={styles["row"]}>
            <Select
              value=""
              name="ano"
              label="Ano Desejadp"
              onChange={() => {}}
              loading={false}
              data={[]}
            />

            <Select
              value=""
              name="preco"
              label="Faixa de preço"
              onChange={() => {}}
              loading={false}
              data={[]}
            />
          </div>
        </div>
        <div className={styles["col"]}>
          <div className={styles["row"]}>
            <Select
              value={marcaId}
              name="marca"
              label="Marca"
              onChange={(e) => onChange(e)}
              loading={loadingMarcas}
              data={marcas}
            />

            <Select
              value={modeloId}
              name="modelo"
              label="Modelo"
              onChange={(e) => onChange(e)}
              loading={loadingModelos}
              data={modelos}
            />
          </div>
          <div className={styles["row"]}>
            <Select
              value={versionId}
              name="version"
              label="Version"
              onChange={(e) => onChange(e)}
              loading={loadingeVersions}
              data={versions}
            />
          </div>
        </div>
      </div>
      <div className={`${styles["row"]} ${styles["actions"]}`}>
        <div className={styles["col"]}>
          <a href="/" className={styles["link-custom-search"]}>
            &rsaquo; Busca Avançada
          </a>
        </div>
        <div className={`${styles["col"]} ${styles["actions"]}`}>
          <Link className={styles["link-reset"]} to="/" onClick={() => reset()}>
            Limpar filtros
          </Link>
          <Link
            className={`${styles["link-search"]} ${
              !showButton && styles["disabled-link"]
            }`}
            to={`/${marcaId}/${modeloId}/${versionId}`}
            onClick={() => hideLink()}
          >
            Ver ofertas
          </Link>
        </div>
      </div>
    </>
  );
};

export default Filter;
